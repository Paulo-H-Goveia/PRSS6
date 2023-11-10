package br.edu.ifsp.arq.prss6.glicdiary.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.prss6.glicdiary.domain.model.Permission;

public interface PermissionRepository extends JpaRepository<Permission, Long>{

}