package br.edu.ifsp.arq.prss6.glicdiary.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.prss6.glicdiary.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
