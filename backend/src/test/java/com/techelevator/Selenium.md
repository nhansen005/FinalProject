# How to get Selenium / ChromeDriver to work on your Mac


### 1. Update ChromeDriver, and make sure Mac OS X will allow it to run:
- ChromeDriver is a stand-alone executable file located at: `~/dev-tools/chromedriver/chromedriver`
- Look up your currently installed version of Chrome (go to the Chrome menu and select the first option, About Google Chrome)
- Navigate to [ChromeDriver Downloads page](https://chromedriver.chromium.org/downloads)
- Click on the link that that corresponds to the version of Chrome you have 
- Download the zipped ChromeDriver file `chromedriver_mac64.zip` (you do not have the new M1 chip).
- Unzip the file you downloaded, which should produce your `chromedriver` executable.
- Put your `chromedriver` executable it in your `~/dev-tools/chromedriver/` folder, overwriting the old one if necessary
- Double-click on the `chromedriver` executable to launch it. Mac OS X may pop-up a window saying that it won't open an untrusted application. If so:
    - Click OK
    - Open System Preferences and click Security & Privacy.
    - Click the Open Anyway button (bottom panel, on the right)
    - When a new pop-up appears, click Open
    - After it opens successfully, close the Terminal window it generated.
- ChromeDriver should now be able to run!

### 2. Launch the Server application 
- Right-click on `src/main/java/com/techelevator/Application.java` and selecting "Run Application.main()"

### 3. Run your Selenium tests! 
- Right-click on `SeleniumTests.java` and choose "Run SeleniumTests"
