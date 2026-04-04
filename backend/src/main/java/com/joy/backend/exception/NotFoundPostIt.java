package com.joy.backend.exception;

public class NotFoundPostIt extends RuntimeException {

	public NotFoundPostIt(String message) {
		super(message);
	}
}
