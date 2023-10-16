package br.edu.ifsp.arq.prss6.glicdiary.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.Measure;
import br.edu.ifsp.arq.prss6.glicdiary.domain.model.User;

public interface MeasureRepository extends 
	JpaRepository<Measure, Long> {

	public List<Measure> findByUser(User user);
}
