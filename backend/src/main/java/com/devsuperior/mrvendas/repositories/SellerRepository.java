package com.devsuperior.mrvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.mrvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
