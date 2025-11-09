package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping("/test")
public class TestController {

  @Operation(
      summary = "Get Length of Input",
      description = "Returns the length of the provided input string.")
  @ApiResponse(responseCode = "200", description = "Returns the length of the input string")
  @GetMapping("/length/{input}")
  public ResponseEntity<LengthResponse> getLengthOfInput(@PathVariable String input) {
    String message = "Length of input: " + input.length();
    LengthResponse lengthResponse = new LengthResponse(message, input.length());
    return ResponseEntity.ok(lengthResponse);
  }

  public record LengthResponse(String message, int length) {}
}
