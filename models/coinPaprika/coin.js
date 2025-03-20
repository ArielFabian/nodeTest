class Coin {
    constructor({id, name, symbol, rank, is_new, is_active, type, description, first_data_at, last_data_at}) {
      this.id = id
      this.name = name
      this.symbol = symbol
      this.rank = rank
      this.isNew = is_new;
      this.isActive = is_active
      this.type = type
      this.description = description || "no description"
      this.firstDataAt = first_data_at || "no data"
      this.lastDataAt = last_data_at || "no data"
    }
  
    getId() {
      return this.id
    }
  
    getName() {
      return this.name
    }
  
    getSymbol() {
      return this.symbol
    }
  
    getRank() {
      return this.rank
    }
  
    isNew() {
      return this.isNew
    }
  
    isActive() {
      return this.isActive
    }
  
    getType() {
      return this.type
    }
    
    getDescription() {
        return this.description
    }

    getLastData() {
        return this.lastDataAt
    }

    getFirstData() {
        return this.firstDataAt
    }
}

module.exports = Coin