package br.edu.ifsp.arq.pprss6.diarioglicemico.config;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FirebaseConfig {
	
	@Bean
	public FirebaseApp initializeFirebse() throws IOException{
		FileInputStream serviceAccount = new FileInputStream("/diario_glicemico-1/src/main/resources/credentials/arquivo_do_banco.json");
		
		FirebaseOptions options = new FirebaseOptions.Builder().setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.setDatabaseUrl("url do banco de dados").build();
		
		return FirebaseApp.initializeApp(options);
	}
	
}
