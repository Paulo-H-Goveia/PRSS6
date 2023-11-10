package br.edu.ifsp.arq.prss6.glicdiary.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.Measure;
import br.edu.ifsp.arq.prss6.glicdiary.domain.model.User;
import br.edu.ifsp.arq.prss6.glicdiary.repository.MeasureRepository;
import br.edu.ifsp.arq.prss6.glicdiary.repository.UserRepository;
import br.edu.ifsp.arq.prss6.glicdiary.service.exception.NonExistentOrInactiveUserException;

@Service
public class MeasureService {
	
	@Autowired
	private MeasureRepository measureRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public Measure save(Measure measure) {
		Optional<User> user = userRepository.findById(
				measure.getUser().getId());
		if(!user.isPresent() || !user.get().isActive()) {
			throw new NonExistentOrInactiveUserException();
		}
		return measureRepository.save(measure);
	}
	
	public List<Measure> listByUser(String email){
		Optional<User> user = userRepository.findByEmail(email);
		if(user.isPresent()) {
			return measureRepository.findByUser(user.get());
		}
		return null;
	}

	public Measure update(Long id, Measure measure) {
		Measure measureSaved = findMeasureById(id);
		BeanUtils.copyProperties(measure, measureSaved, "id");
		return measureRepository.save(measureSaved);
	}
	
	public Measure findMeasureById(Long id) {
		Measure measureSaved = measureRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return measureSaved;
	}
}
