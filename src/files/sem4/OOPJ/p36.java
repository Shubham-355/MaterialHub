// 36	Program to display a moving banner in applet.		

import java.applet.Applet;
import java.awt.Graphics;
import java.util.Timer;
import java.util.TimerTask;

public class MovingBannerApplet extends Applet {
    String message = "Moving Banner";

    public void init() {
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            int x = 10;

            public void run() {
                x += 10;
                repaint();
            }
        }, 0, 1000); // Delay 0 milliseconds, repeat every 1 second
    }

    public void paint(Graphics g) {
        g.drawString(message, getXCoordinate(), 50);
    }

    int getXCoordinate() {
        int x = Integer.parseInt(getParameter("x"));
        if (x == 0) {
            x = 10;
        }
        return x;
    }
}