package edu.charactyr.backend;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharactyrUserRepository extends CrudRepository<CharactyrUser, Long>{};

