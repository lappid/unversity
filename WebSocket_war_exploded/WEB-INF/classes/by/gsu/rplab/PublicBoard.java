package by.gsu.rplab;

import javax.websocket.OnMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;

@ServerEndpoint("/publicboard")
public class PublicBoard {

    @OnMessage
    public void onMessage(Session session, String msg) {
        try {
            session.getBasicRemote().sendText("Someone posted: " + msg);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
