package com.example.ProductManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.ProductManagement.entity.ProductCategory;

@RepositoryRestResource(path="ProductsCategory")
@CrossOrigin(origins = "http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {

}
