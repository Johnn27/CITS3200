This is the innards of the project, unfortunately, due to time limitations we were not able to integrate the two parts of the project together, so this part of the system has not been joined with the web server itself.

The plan of the project was to have the RSS feed, the date to start searching from, and the keywords the user wished to search submitted by the user and sent to this part of the project, obviously this has not taken place. So instead we've set up this part to have the user input directly into the system from the command line what would have been sent via the website ideally. Obviously this is not user friendly, but the intention was that the user would never have to interact with this part.

The 'Stream' part of this project was written by Matthew McDonald, and the Reader part of this project was written by Matthew McDonald, Jiangchaun Ou and Yunzhou Chen.

There are 4 files that make up this part of the project.

Stream.java: the java source code for what is the part of the system that reads in the RSS feed that inoreader sent and outputs the relevant links, and their published date.

Reader.java: the java source code for the 'analyser', it takes in a piece of text, analyses it for how many times the users submitted keywords were used and returns a score. The score is calculated by multiplying the number of times each keyword is used by each other.

cancer.txt: The text from the wikipedia page for 'Cancer' used for the testing of the Reader.

stream.txt: The result from "https://www.inoreader.com/reader/api/0/stream/contents/feed/http://www.news.com.au/content-feeds/latest-news-national/?AppId=1000000612&AppKey=jrGE4gC_lD4ejlLjpACx6PeJRnLae80d" returned as a text file. 
Obviously in the finished product, this would have been sent from the web server instead of being read locally from a txt file.

The other three files are example results from the running of the acceptance tests. For transparency we wish to state that they are NOT the results from the testing session we did with the client, although obviously the testing we did with them was very similar.
