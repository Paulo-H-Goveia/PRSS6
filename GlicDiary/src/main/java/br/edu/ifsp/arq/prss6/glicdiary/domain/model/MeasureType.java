package br.edu.ifsp.arq.prss6.glicdiary.domain.model;

public enum MeasureType {
	
	JEJUM("JEJUM"),
	ALMOCO("ALMOCO"),
	CORRECAO("CORRECAO"),
	JANTA("JANTA");
	
	private String type;
	
	MeasureType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}
	
}
