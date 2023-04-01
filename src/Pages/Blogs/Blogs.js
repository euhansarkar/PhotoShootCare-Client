import React from "react";
import toast from "react-hot-toast";
import useTitle from "../Hooks/useTitle";

const notify = () => toast(`Blog added to your readlist`);

const Blogs = () => {
    useTitle(`Blogs`)
  return (
    <div className="grid gap-y-7 my-5 mx-2">
      <div className="card flex flex-row-reverse bg-sky-50 lg:card-side shadow-xl ">
        
        <div className="card-body w-3/5">
          <h2 className="card-title">Difference between SQL and NoSQL</h2>
          <p>
            When choosing a modern database, one of the biggest decisions is
            picking a relational (SQL) or non-relational (NoSQL) data structure.
            While both are viable options, there are key differences between the
            two that users must keep in mind when making a decision. Here, we
            break down the most important distinctions and discuss the best SQL
            and NoSQL database systems available. The five critical differences
            between SQL vs NoSQL are: SQL databases are relational, NoSQL
            databases are non-relational. SQL databases use structured query
            language and have a predefined schema. NoSQL databases have dynamic
            schemas for unstructured data. SQL databases are vertically
            scalable, while NoSQL databases are horizontally scalable. SQL
            databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores. SQL databases are better
            for multi-row transactions, while NoSQL is better for unstructured
            data like documents or JSON.
          </p>
          <div className="card-actions flex items-center justify-between">
            <button onClick={notify} className="btn btn-primary">
              Add To Read List
            </button>
          </div>
        </div>
      </div>
      <div className="card flex flex-row-reverse bg-sky-50 lg:card-side shadow-xl ">
        
        <div className="card-body w-3/5">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. JWT is a
            token based stateless authentication mechanism. Since it is a
            client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information. How it works? Basically the identity provider(IdP)
            generates a JWT certifying user identity and Resource server decodes
            and verifies the authenticity of the token using secret salt /
            public key. User sign-in using username and password or
            google/facebook. Authentication server verifies the credentials and
            issues a jwt signed using either a secret salt or a private key.
            User's Client uses the JWT to access protected resources by passing
            the JWT in HTTP Authorization header. Resource server then verifies
            the authenticity of the token using the secret salt/ public key.
          </p>
          <div className="card-actions flex items-center justify-between">
            <button onClick={notify} className="btn btn-primary">
              Add To Read List
            </button>
          </div>
        </div>
      </div>
      <div className="card flex flex-row-reverse bg-sky-50 lg:card-side shadow-xl ">
        
        <div className="card-body w-3/5">
          <h2 className="card-title">
            What is the difference between javascript and NodeJS?
          </h2>
          <p>
            Differences Between Node.js and JavaScript? 1. JavaScript is a
            client-side scripting language that is lightweight, cross-platform,
            and interpreted. Both Java and HTML include it. Node.js, on the
            other hand, is a V8-based server-side programming language. As a
            result, it is used to create network-centric applications. It's a
            networked system made for data-intensive real-time applications. If
            we compare node js vs. python, it is clear that node js will always
            be the preferred option. 2. JavaScript is a simple programming
            language that can be used with any browser that has the JavaScript
            Engine installed. Node.js, on the other hand, is an interpreter or
            execution environment for the JavaScript programming language. It
            requires libraries that can be conveniently accessed from JavaScript
            programming to be more helpful. 3. Any engine may run JavaScript. As
            a result, writing JavaScript is incredibly easy, and any working
            environment is similar to a complete browser. Node.js, on the other
            hand, only enables the V8 engine. Written JavaScript code, on the
            other hand, can run in any context, regardless of whether the V8
            engine is supported. 4. A specific non-blocking operation is
            required to access any operating system. There are a few essential
            objects in JavaScript, but they are entirely OS-specific. Node.js,
            on the other hand, can now operate non-blocking software tasks out
            of any JavaScript programming. It contains no OS-specific constants.
            Node.js establishes a strong relationship with the system files,
            allowing companies to read and write to the hard drive. 5. The
            critical benefits of JavaScript include a wide choice of interfaces
            and interactions and just the proper amount of server contact and
            direct visitor input. Node.js, on the other hand, offers node
            package management with over 500 modules and the capacity to handle
            many requests at the same time. It also offers the unique ability to
            enable microservice architecture and the Internet of Things. Even
            when comparing node js vs. react js, node js always wins. 444444.
            Single Threaded Event Loop Model Processing Steps: Clients Send
            request to Web Server. Node JS Web Server internally maintains a
            Limited Thread pool to provide services to the Client Requests. Node
            JS Web Server receives those requests and places them into a Queue.
            It is known as “Event Queue”. Node JS Web Server internally has a
            Component, known as “Event Loop”. Why it got this name is that it
            uses indefinite loop to receive requests and process them. Event
            Loop uses Single Thread only. It is main heart of Node JS Platform
            Processing Model. Event Loop checks any Client Request is placed in
            Event Queue. If not then wait for incoming requests for
            indefinitely. If yes, then pick up one Client Request from Event
            Queue Starts process that Client Request If that Client Request Does
            Not requires any Blocking IO Operations, then process everything,
            prepare response and send it back to client. If that Client Request
            requires some Blocking IO Operations like interacting with Database,
            File System, External Services then it will follow different
            approach Checks Threads availability from Internal Thread Pool Picks
            up one Thread and assign this Client Request to that thread. That
            Thread is responsible for taking that request, process it, perform
            Blocking IO operations, prepare response and send it back to the
            Event Loop
          </p>
          <div className="card-actions flex items-center justify-between">
            <button onClick={notify} className="btn btn-primary">
              Add To Read List
            </button>
          </div>
        </div>
      </div>
      <div className="card flex flex-row-reverse bg-sky-50 lg:card-side shadow-xl ">
        
        <div className="card-body w-3/5">
          <h2 className="card-title">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            Single Threaded Event Loop Model Processing Steps: Clients Send
            request to Web Server. Node JS Web Server internally maintains a
            Limited Thread pool to provide services to the Client Requests. Node
            JS Web Server receives those requests and places them into a Queue.
            It is known as “Event Queue”. Node JS Web Server internally has a
            Component, known as “Event Loop”. Why it got this name is that it
            uses indefinite loop to receive requests and process them. Event
            Loop uses Single Thread only. It is main heart of Node JS Platform
            Processing Model. Event Loop checks any Client Request is placed in
            Event Queue. If not then wait for incoming requests for
            indefinitely. If yes, then pick up one Client Request from Event
            Queue Starts process that Client Request If that Client Request Does
            Not requires any Blocking IO Operations, then process everything,
            prepare response and send it back to client. If that Client Request
            requires some Blocking IO Operations like interacting with Database,
            File System, External Services then it will follow different
            approach Checks Threads availability from Internal Thread Pool Picks
            up one Thread and assign this Client Request to that thread. That
            Thread is responsible for taking that request, process it, perform
            Blocking IO operations, prepare response and send it back to the
            Event Loop
          </p>
          <div className="card-actions flex items-center justify-between">
            <button onClick={notify} className="btn btn-primary">
              Add To Read List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
