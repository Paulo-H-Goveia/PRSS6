package br.edu.ifsp.arq.prss6.glicdiary.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.Measure;
import br.edu.ifsp.arq.prss6.glicdiary.repository.MeasureRepository;
import br.edu.ifsp.arq.prss6.glicdiary.service.MeasureService;

@RestController
@RequestMapping("/activities")
public class MeasureResource {

	@Autowired
	private MeasureRepository activityRepository;
	
	@Autowired
	private MeasureService activityService;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_ACTIVITY') and #oauth2.hasScope('read')")
	public List<Measure> list(){
		return activityRepository.findAll();
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_ACTIVITY') and #oauth2.hasScope('read')")
	public ResponseEntity<Measure> findById(@PathVariable Long id){
		Optional<Measure> activity = 
				activityRepository.findById(id);
		if(activity.isPresent()) {
			return ResponseEntity.ok(activity.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/user/{email}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_ACTIVITY') and #oauth2.hasScope('read')")
	public ResponseEntity<List<Measure>> listByUser(@PathVariable String email){
		List<Measure> activities = activityService.listByUser(email);
		if(!activities.isEmpty()) {
			return ResponseEntity.ok(activities);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	@PreAuthorize("hasAuthority('ROLE_REGISTER_ACTIVITY') and #oauth2.hasScope('write')")
	public Measure create(@Valid @RequestBody Measure activity) {
		return activityService.save(activity);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_ACTIVITY') and #oauth2.hasScope('write')")
	public void remover(@PathVariable Long id) {
		activityRepository.deleteById(id);
	}
}
