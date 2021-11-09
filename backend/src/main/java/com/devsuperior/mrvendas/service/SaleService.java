package com.devsuperior.mrvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.mrvendas.dto.SaleDTO;
import com.devsuperior.mrvendas.dto.SaleSuccessDTO;
import com.devsuperior.mrvendas.dto.SaleSumDTO;
import com.devsuperior.mrvendas.entities.Sale;
import com.devsuperior.mrvendas.repositories.SaleRepository;
import com.devsuperior.mrvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepository.findAll();
		 Page<Sale> result = repository.findAll(pageable);
		 return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupBySeller(){
		return repository.successGroupBySeller();
		
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupBySeller(){
		return repository.amountGroupBySeller();
		
	}
	
}
