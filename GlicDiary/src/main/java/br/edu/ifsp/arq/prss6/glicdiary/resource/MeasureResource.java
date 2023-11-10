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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.Measure;
import br.edu.ifsp.arq.prss6.glicdiary.repository.MeasureRepository;
import br.edu.ifsp.arq.prss6.glicdiary.service.MeasureService;

@RestController
@RequestMapping("/measures")
public class MeasureResource {

	@Autowired
	private MeasureRepository measureRepository;
	
	@Autowired
	private MeasureService measureService;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_MEASURE') and #oauth2.hasScope('read')")
	public List<Measure> list(){
		return measureRepository.findAll();
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_MEASURE') and #oauth2.hasScope('read')")
	public ResponseEntity<Measure> findById(@PathVariable Long id){
		Optional<Measure> measure = 
				measureRepository.findById(id);
		if(measure.isPresent()) {
			return ResponseEntity.ok(measure.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/user/{email}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_MEASURE') and #oauth2.hasScope('read')")
	public ResponseEntity<List<Measure>> listByUser(@PathVariable String email){
		List<Measure> measures = measureService.listByUser(email);
		if(!measures.isEmpty()) {
			return ResponseEntity.ok(measures);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	@PreAuthorize("hasAuthority('ROLE_REGISTER_MEASURE') and #oauth2.hasScope('write')")
	public Measure create(@Valid @RequestBody Measure measure) {
		return measureService.save(measure);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVE_MEASURE') and #oauth2.hasScope('write')")
	public void remover(@PathVariable Long id) {
		measureRepository.deleteById(id);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_REGISTER_MEASURE') and #oauth2.hasScope('write')")
	public ResponseEntity<Measure> update(@PathVariable Long id, @Valid @RequestBody Measure measure) {
		Measure measureSaved = measureService.update(id, measure);
		return ResponseEntity.ok(measureSaved);
	}
}
