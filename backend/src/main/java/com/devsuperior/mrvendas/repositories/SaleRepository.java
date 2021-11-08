package com.devsuperior.mrvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.mrvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
