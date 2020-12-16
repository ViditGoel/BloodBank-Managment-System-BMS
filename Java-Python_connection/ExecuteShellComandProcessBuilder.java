import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class ExecuteShellComandProcessBuilder {
    public static void main (String [] args) throws IOException, InterruptedException{
        
        String [] command = {"python","name of python script to run"};   //Replace 'name of python script to run' Blood donation Prediction.py or Predection_Units.py
        
        ProcessBuilder processBuilder = new ProcessBuilder(command); 
        processBuilder.directory(new File(System.getProperty("user.home")));
        
        try {
            Process process = processBuilder.start();
            
            BufferedReader reader = 
                new BufferedReader (new InputStreamReader(process.getInputStream()));
            
            String line;
            
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            
            int exitCode = process.waitFor(); 
            
            System.out.println ("\nExited with error code : " + exitCode);
            
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("HI SB KHATAM");
        }
    }
}