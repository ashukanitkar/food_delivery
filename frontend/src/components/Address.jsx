const Address = () => {
   return (
    <div>
    <div class= "ml-6 mr-6 mt-6 is-size-3">Address </div>
    <div class= "ml-6 mr-6 mt-4">
    
    <div class="columns">
    
    <div class = "column is-one-fourth">
        <div class="field">
        <div class="control">
            <input class="input" type="text" placeholder="Street Address"></input>
        </div>
        </div>
    </div>
  
    <div class = "column is-one-fourth">
    <div class="field">
        <div class="control">
        <input class="input" type="email" placeholder="Apt Num"/>
        </div>
    </div>
    </div>
  
    <div class = "column is-one-fourth">
    <div class="field">
        <div class="control">
        <input class="input" type="text" placeholder="City"/>
        </div>
    </div>
    </div>
    
    </div>
</div>

<div class= "ml-6 mr-6 mt-4">
    
    <div class="columns">
    
    <div class = "column is-one-fourth">
        <div class="field">
        <div class="control">
            <input class="input" type="text" placeholder="Street"></input>
        </div>
        </div>
    </div>
  
    <div class = "column is-one-fourth">
    <div class="field">
        <div class="control">
        <input class="input" type="email" placeholder="State"/>
        </div>
    </div>
    </div>
  
    <div class = "column is-one-fourth">
    <div class="field">
        <div class="control">
        <input class="input" type="text" placeholder="Zip Code"/>
        </div>
    </div>
    </div>
    
    </div>
</div>

</div>
   )
}

export default Address;