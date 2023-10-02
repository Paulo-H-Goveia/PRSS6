package br.edu.ifsp.arq.prss6.glicdiary.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.edu.ifsp.arq.prss6.glicdiary.model.Measure;
import br.edu.ifsp.arq.prss6.glicdiary.repository.MeasureRepository;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/measures")
public class MeasureResource {
	
	@Autowired
	private MeasureRepository measureRepository;
	
	@GetMapping
	public List<Measure> list(){
		return measureRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Measure> findById(@PathVariable Long id) {
		Optional<Measure> activity = measureRepository.findById(id);
		if(activity.isPresent()) {
			return ResponseEntity.ok(activity.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Measure	create  (@Valid @RequestBody Measure measure){
		return measureRepository.save(measure);
	}

}
