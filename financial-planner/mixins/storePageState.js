

const storeKey = '__xn__pageState'

export default {
  // 恢复
  beforeRouteEnter(to,from,next) {
    let temp;
    if ( 
      typeof window === 'object' &&
      typeof window[storeKey] === 'object' &&
      ( temp=window[storeKey][getName(to.name)] )
    ) {
      console.log('_______________ enter')
      console.log(to.name)
      console.log(temp)
      console.log('_______________ enter')
      next((vm)=>{
        temp.forEach(item=>{
          vm[item.key]=item.value
        })
        console.log(vm.name)
      });
    } else {
      next();
    }
  },
  // 记录
  beforeRouteLeave(to,from,next) {
    if ( 
      typeof this.store==='object' && 
      Array.isArray(this.store.keys) 
    ) {
      let temp = [];
      this.store.keys.forEach(k=>{
        temp.push({key:k, value:this[k]})
      });
      console.log('_______________ leave')
      console.log(from.name)
      console.log(temp)
      console.log('_______________ leave')
      window[storeKey] = window[storeKey] || {};
      window[storeKey][this.store.name||getName(from.name)] = temp;
    }
    next();
  }
}


function getName(name) {
  return name.replace(/\-(\w)/g, (m,g,i,s)=>{
    return g.toUpperCase();
  })
}
