export const paraToPoints = (para,numberOfLine) => {
     para = para.split('.').map(sentence => sentence.trim())
     para = para.filter(sentence => sentence.length>0).slice(0,numberOfLine || 3)
     console.log(para);
     return para
}