// slider 
const inputSlider = document.querySelector('.slider');
const lines=document.querySelector('.fill');
const mainGradient=document.querySelector('.gradient');
const step1Gradient=document.querySelector('.step-1-gradient');
const step3Gradient=document.querySelector('.step-3-gradient');
const step4Gradient=document.querySelector('.step-4-gradient');

mainGradient.style.visibility='hidden';
step1Gradient.style.visibility='hidden';
step3Gradient.style.visibility='hidden';
step4Gradient.style.visibility='hidden';

//  content-text
const mainContent=document.querySelector('.text-content');
const step1Content=document.querySelector('.step-1-text-content');
const step2Content=document.querySelector('.step-2-text-content');
const step3Content=document.querySelector('.step-3-text-content');
const step4Content=document.querySelector('.step-4-text-content');
mainContent.style.visibility='hidden';
step1Content.style.visibility='hidden';
step2Content.style.visibility='hidden';
step3Content.style.visibility='hidden';
step4Content.style.visibility='hidden';

//content cilrcle
const paraCircle1=document.querySelector('.para-1st-circle');
const paraCircle2=document.querySelector('.para-2nd-circle');
//content para
const para1=document.querySelector('.para-1st-text');
const para2=document.querySelector('.para-2nd-text');

//  Images
const mainImage=document.querySelector('.main-img');
const step1Image=document.querySelector('.img-step-1');
const step1Image2=document.querySelector('.img2-step-1');
const step2Image=document.querySelector('.img2-step-2');
const step3Image=document.querySelector('.img2-step-3');
const step4Image=document.querySelector('.img2-step-4');
mainImage.style.display='none';
step1Image.style.display='none';
step1Image2.style.display='none';
step2Image.style.display='none';
step3Image.style.display='none';
step4Image.style.display='none';

//  smallImages
const step1ImageSm=document.querySelector('.dashimg-step-1');
const step1Image2Sm=document.querySelector('.dashimg2-step-1');
const step2ImageSm=document.querySelector('.dashimg2-step-2');
const step3ImageSm=document.querySelector('.dashimg2-step-3');
const step4ImageSm=document.querySelector('.dashimg2-step-4');
step1ImageSm.style.display='none';
step1Image2Sm.style.display='none';
step2ImageSm.style.display='none';
step3ImageSm.style.display='none';
step4ImageSm.style.display='none';


let values=0;
let increment=1;
setInterval(() => {
  // Update the slider value
  values += increment;
  inputSlider.value=values;
  sliderValue=values;
  lines.style.width=sliderValue + '%';
  if(sliderValue<=5){
    // gradints
     mainGradient.style.visibility='visible';
     step1Gradient.style.visibility='hidden';
     step3Gradient.style.visibility='hidden';
     step4Gradient.style.visibility='hidden';
 
     // content text
     mainContent.style.visibility='visible';
     step1Content.style.visibility='hidden';
     step2Content.style.visibility='hidden';
     step3Content.style.visibility='hidden';
     step4Content.style.visibility='hidden';
 
     //  Images
     mainImage.style.display='block';
     step1Image.style.display='none';
     step1Image2.style.display='none';
     step2Image.style.display='none';
     step3Image.style.display='none';
     step4Image.style.display='none';
 
     //  smallImages
     step1ImageSm.style.display='none';
     step1Image2Sm.style.display='none';
     step2ImageSm.style.display='none';
     step3ImageSm.style.display='none';
     step4ImageSm.style.display='none';
  }
  else if(sliderValue>5 && sliderValue<=24){
     // gradints
     mainGradient.style.visibility='visible';
     step1Gradient.style.visibility='hidden';
     step3Gradient.style.visibility='hidden';
     step4Gradient.style.visibility='hidden';
 
     // content text
     mainContent.style.visibility='hidden';
     step1Content.style.visibility='visible';
     step2Content.style.visibility='hidden';
     step3Content.style.visibility='hidden';
     step4Content.style.visibility='hidden';
 
     paraCircle1.style.cssText='background-color:#F6E43F';
     paraCircle2.style.cssText='background-color:#D9D9D9';
     para1.style.color='#FCF1B6';
     para2.style.color='#939393';
 
     //  Images
     mainImage.style.display='none';
     step1Image.style.display='block';
     step1Image2.style.display='none';
     step2Image.style.display='none';
     step3Image.style.display='none';
     step4Image.style.display='none';
 
     //  smallImages
     step1ImageSm.style.display='block';
     step1Image2Sm.style.display='none';
     step2ImageSm.style.display='none';
     step3ImageSm.style.display='none';
     step4ImageSm.style.display='none';
  }
  else if(sliderValue>24 && sliderValue<=43){
     // gradints
     mainGradient.style.visibility='visible';
     step1Gradient.style.visibility='hidden';
     step3Gradient.style.visibility='hidden';
     step4Gradient.style.visibility='hidden';
 
     // content text
     mainContent.style.visibility='hidden';
     step1Content.style.visibility='visible';
     step2Content.style.visibility='hidden';
     step3Content.style.visibility='hidden';
     step4Content.style.visibility='hidden';
 
     paraCircle1.style.cssText='background-color:#D9D9D9';
     paraCircle2.style.cssText='background-color:#F6E43F';
     para1.style.color='#939393';
     para2.style.color='#FCF1B6';
 
     //  Images
     mainImage.style.display='none';
     step1Image.style.display='none';
     step1Image2.style.display='block';
     step2Image.style.display='none';
     step3Image.style.display='none';
     step4Image.style.display='none';
 
     //  smallImages
     step1ImageSm.style.display='none';
     step1Image2Sm.style.display='block';
     step2ImageSm.style.display='none';
     step3ImageSm.style.display='none';
     step4ImageSm.style.display='none';
  }
  else if(sliderValue>43 && sliderValue<=62){
     // gradints
     mainGradient.style.visibility='hidden';
     step1Gradient.style.visibility='visible';
     step3Gradient.style.visibility='hidden';
     step4Gradient.style.visibility='hidden';
 
     // content text
     mainContent.style.visibility='hidden';
     step1Content.style.visibility='hidden';
     step2Content.style.visibility='visible';
     step3Content.style.visibility='hidden';
     step4Content.style.visibility='hidden';
 
     //  Images
     mainImage.style.display='none';
     step1Image.style.display='none';
     // step1Image2.style.display='block';
     step2Image.style.display='block';
     step3Image.style.display='none';
     step4Image.style.display='none';
 
     //  smallImages
     step1ImageSm.style.display='none';
     step1Image2Sm.style.display='none';
     step2ImageSm.style.display='block';
     step3ImageSm.style.display='none';
     step4ImageSm.style.display='none';
  }
  else if(sliderValue>62 && sliderValue<=81){
     // gradints
     mainGradient.style.visibility='hidden';
     step1Gradient.style.visibility='hidden';
     step3Gradient.style.visibility='visible';
     step4Gradient.style.visibility='hidden';
 
     // content text
     mainContent.style.visibility='hidden';
     step1Content.style.visibility='hidden';
     step2Content.style.visibility='hidden';
     step3Content.style.visibility='visible';
     step4Content.style.visibility='hidden';
 
     //  Images
     mainImage.style.display='none';
     step1Image.style.display='none';
     step1Image2.style.display='none';
     step2Image.style.display='none';
     step3Image.style.display='block';
     step4Image.style.display='none';
 
     //  smallImages
     step1ImageSm.style.display='none';
     step1Image2Sm.style.display='none';
     step2ImageSm.style.display='none';
     step3ImageSm.style.display='block';
     step4ImageSm.style.display='none';
  }
  else if(sliderValue>81 && sliderValue<=100){
     // gradints
     mainGradient.style.visibility='hidden';
     step1Gradient.style.visibility='hidden';
     step3Gradient.style.visibility='hidden';
     step4Gradient.style.visibility='visible';
 
     // content text
     mainContent.style.visibility='hidden';
     step1Content.style.visibility='hidden';
     step2Content.style.visibility='hidden';
     step3Content.style.visibility='hidden';
     step4Content.style.visibility='visible';
 
     //  Images
     mainImage.style.display='none';
     step1Image.style.display='none';
     step1Image2.style.display='none';
     step2Image.style.display='none';
     step3Image.style.display='none';
     step4Image.style.display='block';
 
     //  smallImages
     step1ImageSm.style.display='none';
     step1Image2Sm.style.display='none';
     step2ImageSm.style.display='none';
     step3ImageSm.style.display='none';
     step4ImageSm.style.display='block';
 
  }
  
  // Reset the value when it reaches 100
  if(values>=100){
    values = 0;
  }
}, 60);// Adjust the interval time for speed 