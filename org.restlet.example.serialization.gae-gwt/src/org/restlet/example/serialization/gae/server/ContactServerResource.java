package org.restlet.example.serialization.gae.server;

import org.restlet.example.common.Address;
import org.restlet.example.common.Contact;
import org.restlet.example.common.ContactResource;
import org.restlet.resource.Delete;
import org.restlet.resource.Get;
import org.restlet.resource.Put;
import org.restlet.resource.ServerResource;

/**
 * The server side implementation of the Restlet resource.
 */
public class ContactServerResource extends ServerResource implements
        ContactResource {

    private static volatile Contact contact = new Contact("Scotttt", "Tiger",
            new Address("10 bd Google", null, "20010", "Mountain View", "USA"),
            40);

    @Delete
    public void remove() {
        contact = null;
    }

    @Get
    public Contact retrieve() {
        return contact;
    }

    @Put
    public void store(Contact contact) {
        ContactServerResource.contact = contact;
    }

}
