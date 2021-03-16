const Contact = () => {
    return (
        <div>
        <div class= "ml-6 mr-6 mt-3 is-size-3">Contact </div>
        <div class= "ml-6 mr-6 mt-4">
        <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input"></input>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email address"/>
        </div>
      </div>
      
      
      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone Number"/>
        </div>
      </div>
      </div>
    </div>
    )
}

export default Contact;