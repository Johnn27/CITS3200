import java.io.*;
import java.util.*;

public class Reader{
    
    private String FileName;
    
    private String[] Split;
   
    private String[] keys;
    private int[] vals;

    private boolean TestB;
	
    private HashMap<String, Integer> keywords;
    
    /**
     * Constructor for objects of class Reader
     */
    
    public Reader()
    {
	this.TestB = false;
    }

    public Reader(boolean b)
    {
	this.TestB = b;
    }

    public static void main(String[] args){
         
        Reader r = new Reader(true);
       	Stream st = new Stream();
	Scanner s = new Scanner(System.in);
	ArrayList<String> words = new ArrayList<String>();
	
	System.out.println("Enter your keywords, and then type \"done\" when done");
	
	String temp = s.next();
	
	while(!temp.equals("done"))
	{
		words.add(temp);
		temp = s.next();
	}

	String[] lexicon = st.getArray(words); 

	if (args.length > 0)
        {
		r.FileName = args[0];
        }
	else
	{
		r.FileName = "cancer.txt";
	}

        try
	{ 
		r.splitIntoArray(r.SetFilePath());
	}
        catch(IOException e)
        {
		e.printStackTrace();
        }
	
	r.GetKeywordList();
 	
	long score = r.GetScore(lexicon);

 	System.out.println("Article scores " + score);
    }
    
    public String SetFilePath() throws IOException{
        
        //Reading the file and prepare of saving
        FileReader Freader = new FileReader(FileName);
        
        BufferedReader Breader = new BufferedReader(Freader);
 
        
        //change the type from string to array
        String save = Breader.readLine().toLowerCase();
        
        String temp = "";
        
        while(save != null){
        
            temp += save.toLowerCase();
            
            save = Breader.readLine();
        }

	return temp;
     }   

     public void splitIntoArray(String temp)
     {
        //Changing the type and saving into arraylist, which will be checked the keywords easily
        Split = temp.split(", |\\. |\" | \"|\\.| ");//split the string to array, which includes some repeated keywords
       
        keywords = new HashMap<String,Integer>();//this is the last keywords reasult
        
        for(int i = 0; i < Split.length; i++){
           
	    Split[i] = Split[i].toLowerCase();

            if(!keywords.containsKey(Split[i])){
                
                keywords.put(Split[i], 1);  //  zero to put it in
            }
            
            else{
                
                keywords.put(Split[i], keywords.get( Split[i]) + 1 ); 
            }
        }
    }
    
    
    //To get the list of the keywords
    public void GetKeywordList(){
        
        Iterator iter = keywords.entrySet().iterator();
       
	keys = new String[keywords.size()];
	vals = new int[keys.length];
	int index = 0;

        while(iter.hasNext()){
		
		HashMap.Entry entry = (HashMap.Entry) iter.next();

		keys[index] = (String) entry.getKey();

            	vals[index++] = (int) entry.getValue();
	
	}
        
	for (int i = 1; i < keys.length; i++)
	{
		int j = i;
		while (j > 0 && vals[j] > vals[j - 1])
		{
			int temp = vals[j];
			vals[j] = vals[j-1];
			vals[j-1] = temp;

			String temp2 = keys[j];
			keys[j] = keys[j-1];
			keys[j-1] = temp2;
			
			j--;
		}
	}
     }

  
	public long GetScore(String[] lex)
	{
		long sum = 1;
		for (int i = 0; i < lex.length; i++)
		{
			int temp = 1;	
			for (int j = 0; j < keys.length; j++)
			{
				if (keys[j].indexOf(lex[i]) != -1)
				{
					temp += vals[j];
				}
				
			}
			if (TestB)
			{
				System.out.println(lex[i] + " mentioned " + temp + " times.");
			}
			sum *= (long) temp;
		}
		return sum;
	}

}
