package br.edu.ifsp.arq.prss6.glicdiary.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.Measure;
import br.edu.ifsp.arq.prss6.glicdiary.domain.model.User;
import br.edu.ifsp.arq.prss6.glicdiary.repository.MeasureRepository;
import br.edu.ifsp.arq.prss6.glicdiary.repository.UserRepository;
import br.edu.ifsp.arq.prss6.glicdiary.service.exception.NonExistentOrInactiveUserException;

@Service
public class MeasureService {
	
	@Autowired
	private MeasureRepository activityRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public Measure save(Measure activity) {
		Optional<User> user = userRepository.findById(
				activity.getUser().getId());
		if(!user.isPresent() || !user.get().isActive()) {
			throw new NonExistentOrInactiveUserException();
		}
		return activityRepository.save(activity);
	}
	
	public List<Measure> listByUser(String email){
		Optional<User> user = userRepository.findByEmail(email);
		if(user.isPresent()) {
			return activityRepository.findByUser(user.get());
		}
		return null;
	}
}
