package br.edu.ifsp.arq.prss6.glicdiary.model;

public enum MeasureType {
	
	JEJUM("Jejum"),
	ALMOÇO("Almoço"),
	CORRECAO("Correção"),
	JANTA("Janta");
	
	private String type;
	
	MeasureType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}
	
}
