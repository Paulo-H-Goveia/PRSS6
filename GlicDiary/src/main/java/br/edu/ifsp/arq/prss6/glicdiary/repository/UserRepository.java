package br.edu.ifsp.arq.prss6.glicdiary.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	public Optional<User> findByEmail(String email);

}
