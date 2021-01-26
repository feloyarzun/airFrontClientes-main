const productSelect = ({numeroSku}) => (
   <div class="form-group">
        
        <form>       
            <label>SKU</label>
            <div className="select-container">
            <select clas="form-control" id="formControlSelect">
              {productSKU.map((SKU) => (
                <option value={SKU.value}>{SKU.label}</option>
              ))}
            </select>
            </div>
        </form>
   
    </div>
  );

  