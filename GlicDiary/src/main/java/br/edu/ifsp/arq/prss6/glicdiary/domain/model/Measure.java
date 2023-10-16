package br.edu.ifsp.arq.prss6.glicdiary.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
@Table(name = "activity")
public class Measure {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Enumerated(EnumType.STRING)
	private MeasureType type;
	@NotNull
	@Column(name = "activity_date")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate date;
	@NotNull
	private Double distance; //Km
	@NotNull
	private Integer duration; //minutos
	@NotNull
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public MeasureType getType() {
		return type;
	}
	public void setType(MeasureType type) {
		this.type = type;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Measure other = (Measure) obj;
		return Objects.equals(id, other.id);
	}
	
}
