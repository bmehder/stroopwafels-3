<h1 class="section">Some APIs</h1>

<section>
  <h2><a href="/api/random">Random Number API</a></h2>
  <p>By default, the api generates a random number between 0 and 1.</p>
  <p>The response is a string (or an error).</p>
  <p>The api also excepts the following query parameters:</p>
  <ul>
    <li>min=<em>number</em></li>
    <li>max=<em>number</em></li>
  </ul>

  <h3>Example:</h3>
  <p>https://stroopwafels-demo.vercel.app/api/random?min=32&max=42</p>
</section>

<section>
  <h2><a href="/api/dummy">Dummy REST API</a></h2>
  <p>
    An example of a REST API that handles a GET request and returns a JSON response.
  </p>
  <p>
    Endpoint: <a href="https://stroopwafels-demo.vercel.app/api/dummy"
      >https://stroopwafels-demo.vercel.app/api/dummy</a
    >
  </p>
  <p>
    Page using the endpoint: <a href="https://stroopwafels-demo.vercel.app/dummy"
      >https://stroopwafels-demo.vercel.app/dummy</a
    >
  </p>
</section>
