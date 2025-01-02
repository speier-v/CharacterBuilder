package edu.charactyr.backend;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface FeaturesRepository extends CrudRepository<Feature, Long>{};
