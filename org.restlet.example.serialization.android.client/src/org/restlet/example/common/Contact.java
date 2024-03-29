package org.restlet.example.common;

import java.io.Serializable;

public class Contact implements Serializable {

	private static final long serialVersionUID = 1L;

	private int age;

	private String firstName;

	private Address homeAddress;

	private String lastName;

	public Contact() {
	}

	public Contact(String firstName, String lastName, Address homeAddress,
			int age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.homeAddress = homeAddress;
		this.age = age;
	}

	public int getAge() {
		return age;
	}

	public String getFirstName() {
		return firstName;
	}

	public Address getHomeAddress() {
		return homeAddress;
	}

	public String getLastName() {
		return lastName;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setHomeAddress(Address homeAddress) {
		this.homeAddress = homeAddress;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
