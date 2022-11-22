import goodStorage from 'good-storage'
export class LmgUtil {
  static imgList: Record<string, string> = {}
  static storageLmgList() {
    this.imgList=goodStorage.get('imgList')||{}
    if(this.isEmpty()){
      this.loadAllLmg()
      goodStorage.set('imgList',this.imgList)
    }
  }
  static isEmpty(){
    return !Object.getOwnPropertyNames(this.imgList).length
  }
  static loadAllLmg(){
    const imgMap = import.meta.glob('../assets/img/**/*.png')
    console.log('imgMap', imgMap)
    let absolutePath: string = '' //绝对路径。
    let imgName: string = '' // 图片名
    for(let reactivePath in imgMap){
      absolutePath = imgMap[reactivePath].name
      if(absolutePath){
        imgName =absolutePath.substring(absolutePath.lastIndexOf("/")+1)
        this.imgList[imgName] =absolutePath
      }
    }
    console.log('this.imgList:', this.imgList)
  }
}
