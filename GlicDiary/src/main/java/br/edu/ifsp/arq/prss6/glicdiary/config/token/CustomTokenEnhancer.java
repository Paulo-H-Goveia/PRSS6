package br.edu.ifsp.arq.prss6.glicdiary.config.token;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;

import br.edu.ifsp.arq.prss6.glicdiary.security.SystemUser;

public class CustomTokenEnhancer implements TokenEnhancer{
	
	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
		SystemUser systemUser = (SystemUser) authentication.getPrincipal();
		
		Map<String, Object> addInfo = new HashMap<>();
		addInfo.put("name", systemUser.getUser().getName());
		addInfo.put("user_id", systemUser.getUser().getId());
		
		((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(addInfo);
		return accessToken;
	}
	
}
