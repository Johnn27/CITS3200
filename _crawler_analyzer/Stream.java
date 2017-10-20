import java.util.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.net.URL;

public class Stream
{

	public boolean TestB;

	public Stream()
	{
		this.TestB = false;
	}

	public Stream(boolean b)
	{
		this.TestB = b;
	}

	/**
	 * 	Generating string from .txt file
	**/
	public String readFile(String filename)
	{
		String line = "";
		String ans = "";
		
		try {
			BufferedReader br = new BufferedReader(new FileReader(filename));

			while ((line = br.readLine()) != null)
			{
				ans += line;
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
		return ans;
	}

	/** 
	 *	Parses JSON file for URLs and dates
	**/

	public String[][] getLinks(String s)
	{
		int index = s.indexOf("href\"");
		ArrayList<String> al1 = new ArrayList<String>();
		ArrayList<String> al2 = new ArrayList<String>();

		while (index != -1 && s.indexOf("published\":") != -1)
		{
			s = s.substring(index + 7);
			int tempIndex = s.indexOf("\"");
			al1.add(s.substring(0, tempIndex));
			
			index = s.indexOf("published\":");
			s = s.substring(index + 11);
			index = s.indexOf(",");
			al2.add(s.substring(0, index));

			index = s.indexOf("href\"");
		}
	
		String[][] strArray = new String[2][al1.size()];
		for (int i = 0; i < al1.size(); i++)
		{
			strArray[0][i] = removeSlash(al1.get(i));	
			strArray[1][i] = al2.get(i);
		}
		return strArray;
	}

	/**
	 *	Removing the escape character ('\') from the URLs
	**/ 
	public String removeSlash(String s)
	{
		int i = 0;
		while (i < s.length())
		{
			if (s.charAt(i) == '\\')
			{
				s = s.substring(0, i) + s.substring(i + 1);
			}
			else
			{
				i++;
			}
		}
		return s.toLowerCase();
	}

	/**
	 *	Turn ArrayList into Array
	**/
	public String[] getArray(ArrayList<String> al)
	{
		String[] k = new String[al.size()];
		
		for (int i = 0; i < k.length; i++)
		{
			k[i] = al.get(i).toLowerCase();
		}	

		return k;
	}

	/**
	 * 	 Checks if articles in b are after timeVal, and if they are, 
	 *       method calls getScore method to get their 'score' 
	 *	 and if there is at least 1 hit on a keyword (ie score above k length)
	 *	 prints article, date and score
	**/
	public void getSearches(String[][] b, String[] k, String timeVal)
	{
		int i = 0;
		while (i < b[0].length && b[1][i].compareTo(timeVal) >= 0)
		{
			if (b[0][i].indexOf("inoreader") == -1)
			{
				Date d = new Date(1000 * Long.parseLong(b[1][i]));
				long Score = k.length + 3;
				if (!TestB) Score = getScore(b[0][i], k);

				if (Score -2 > k.length)
				{
					System.out.println("Checking article at " + b[0][i]);
					System.out.println("Published on " + d);
					if (!TestB) System.out.println("Score is " + Score);
					System.out.println();
				}
			}
			i++;
		}
	}
	
	/**
	 *	Generates Reader class and analyses URL
	**/
	public long getScore(String link, String[] k)
	{
		String page = getPage(link);
		Reader r = new Reader();
		r.splitIntoArray(page);
		r.GetKeywordList();
		long score = r.GetScore(k);
		return score;
	}

	/**
	 *	Gets string respresenting url, takes in all HTML, but this doesn't effect scoring system 
	**/
	public String getPage(String s)
	{
		String page = "";
		try 
		{
			URL url = new URL(s);
			BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
			String str = in.readLine();
			page += str;
		
			while (str != null) 
			{
				str = in.readLine();
				page += str;
			}
			
			in.close();
			
		} catch (Exception e) {
		}
		return page;
	}

	public static void main(String args[])
	{
		Stream s;
		if (args.length > 0 && args[0].equals("C"))
		{
			s = new Stream(true);
		}
		else 
		{
			s = new Stream();
		}
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		Scanner in = new Scanner(System.in);
		ArrayList<String> words = new ArrayList<String>();

		System.out.println("Enter the date you wish to search from in the format \ndd/mm/yyyy");

		long timeVal = 0;

		try 
		{
			Date date = sdf.parse(in.next());
			System.out.println(date);
			timeVal = date.getTime();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
		if (!s.TestB)
		{
			System.out.println("Enter your keywords, and then type \"done\" when done");
			String temp = in.next().toLowerCase();

			while(!temp.equals("done"))
			{
				words.add(temp);
				temp = in.next().toLowerCase();
			}
		}

		String[] keyw = s.getArray(words);

		String[][] b = s.getLinks(s.readFile("stream.txt"));

		s.getSearches(b, keyw, String.valueOf(timeVal/1000));
	
	}
}
