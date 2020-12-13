
# Micorservice
In this project we will be creating a microservice and deploy it to cloud it using a Docker.

**Overview:**

	Microservice is an architectural style that structures an application as a collection of loosely coupled services.


_**Key Concepts of Microservices**_

_1. Independently Deployability_
* We need to make sure our services are loosely coupled
* Microservices should not share databases

_2. Modelled Around a Business Domain_

* We ensure that our architecture is arranged to make changes to business functionality as efficient as possible
* Prioritize high cohesion of business functionality over high cohesion of technical functionality

_3. Owning Their Own State_
* Separate functionality that can change freely (our internal implementation) from the functionality that we want to change infrequently (the external contract that the consumers use)
* Need to ensure that we limit making backward-incompatible changes to our micro-services

_4. Size_
* Should be as big as your head
* Adding more services, the complexity of the system will increase, and need to learn new skills (and perhaps adopt new technology)

_5. Flexibility_
* Micro-services buy you options (organizational, technical, scale, robustness) but add cost. If cost is worth the options you want to take up
* By turning up the dial gradually, you are better able to assess the impact as you go

_6. Alignment of Architecture and Organization_
* Our business domain becomes the primary force driving our system architecture
* Making it easier to make changes
* Making it easier for us to align our teams to lines of business within the organization

**Non Micorservice Approaches:** 

	* Single-Process Monolith
	* Modular Monolith - Each can be worked on independently, but all still need to be combined together for deployment and share database.
	* Distributed Monolith - distributed monoliths have all the disadvantages of a distributed system, and the disadvantages of a single-process monolith, without having enough upsides of either.


**Microservice Considerations :** 
|PROS | CONS |
| :---: | :---: |
| Application starts faster | The complexity of creating a distributed system |
| Easier to deploy new versions | Complexity of deploying/managing different types of services |
| Scale the development easily | Cross-cutting concerns don't show up at design time |
| Organizational Alignment | Security & Testing |
| No commitment for technology | Latency & Data Consistency|
|  |  |


**Micro-services Enabling Tech:**
1. _Log Aggregation and Distributed Tracing_ - a pre-requisite for adopting a micro-service architecture. Such as ELK, Humio, Jaeger, LightStep, Honeycomb 
2. _Containers and Kubernetes_ -  provide a much more lightweight way to provision isolated execution for service instances and allowing you to distribute container instances in such a way as to provide the robustness and throughput your service needs, all while allowing you to make efficient use of the underlying machines.
3. _Streaming_-  share data between services using products that allow for the easy streaming and processing of what can often be large value of data such as Kafka, Flink, Debezium 
4. _Public Cloud and Serverless_

