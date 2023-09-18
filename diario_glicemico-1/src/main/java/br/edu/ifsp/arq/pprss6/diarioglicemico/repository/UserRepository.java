package br.edu.ifsp.arq.pprss6.diarioglicemico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.pprss6.diarioglicemico.domain.model.User;


public interface UserRepository extends JpaRepository<User, Long>{

}
