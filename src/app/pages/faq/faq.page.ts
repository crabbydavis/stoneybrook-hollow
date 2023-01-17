import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage {
  @ViewChild(IonContent) content: IonContent;

  faqs: FAQ[] = [
    { question: `What is your learning philosophy?`, answer: `You can learn more on our <a href="https://www.instagram.com/stoneybrookhollow/" target="_blank">Instagram</a> and <a href="https://www.facebook.com/stoneybrookhollowstudio" tartet="_blank">Facebook</a> pages.`},
    { question: `Where are you located?`, answer: `We are near Samuel Morgan Elementary in east Kaysville, Utah. The studio is in the spacious, above-ground basement of our home. It is clean, warm and flooded with natural light. Our outdoor space is magical! We have a wooded yard, child-grown garden,  babbling creek, blackberry bushes and winding footpaths to explore. For privacy reasons, please contact us for the exact address.` },
    { question: `How much is tuition?`, answer: `Tuition is $225 a month. A $100 deposit is required upon enrollment to save your spot and will go towards first month's tuition. <br><br>We believe that all children should have access to a quality early childhood education. We hope to transition to a 501-3c non-profit organization in the near future so we can provide needs-based scholarships. If you are currently unable to afford tuition, please stay in contact with us by following us on <a href="https://www.instagram.com/stoneybrookhollow/" target="_blank">Instagram</a>. We aim to serve all demographics as soon as possible.` },
    { question: `What ages can attend Stoneybrook Hollow?`, answer: `We enroll children ages 3 - 6 (preschool - first grade). Children must be 3 years old and potty trained by September 1st. <br><br>Research has found many benefits to a mixed-aged classroom, including leadership opportunities, adult continuity (children enrolled at 3 years old will have the same teacher for the next 3-4 years of their education) and <a href="https://www.paperpinecone.com/blog/5-benefits-mixed-age-classrooms-preschool" target="_blank">more</a>.` },
    { question: `What is the schedule?`, answer: `We meet Mondays - Thursdays from 9:00 AM - 12:00 PM. We will follow the Davis County School District calendar for holidays and breaks. We do not currently offer a 5-day or afternoon option. Families may choose to come less than 4 days, but tuition will remain the same.` },
    { question: `What is the teacher-student ratio?`, answer: `We will have 6-8 children with one guide.` },
    { question: `Is Stoneybrook Hollow a religious school?`, answer: `No. We deeply value diversity of thought and tradition. We welcome learners from all backgrounds and beliefs. We will objectively and respectfully learn about many international religions and cultures throughout the year.` },
    { question: `Can I come tour the studio?`, answer: `We are currently under construction. Please contact us with any questions. You are always welcome to come see our progress and see the vision for our studio!` },
    { question: `Will snack or lunch be provided?`, answer: `A healthy snack will be available every day. We do not provide lunch. We can accommodate all dietary needs. We are happy (and qualified) to give tube feeds for our learners with gastronomy tubes.` },
    { question: `Can Stoneybrook Hollow accommodate my child with special needs?`, answer: `We have a child with special needs ourselves! We are passionate about advocating for all children, especially those with unique needs. Please contact us about your specific learner. We would love to provide a tailored learning experience for them within our area of expertise. We cannot provide nurses or therapists at this time. If your child has a nurse, we welcome them in our studio.` },
    { question: `Will my child be graded or tested?`, answer: `We guide learners to skills such as mathematics or literacy when they are developmentally ready and interested. When your child is ready, they will learn to master skills at their own pace. We give very little large-group instruction. Going at one's own pace fosters a love of learning.<br><br>As such, we do not give grades or tests. We provide a variety of documentation for parents to follow along on their child's learning journey. An organic and tailored assessment of baseline skills will be conducted through play at the beginning of the year.` },
    { question: `How are parents involved?`, answer: `Our dream is to cultivate life-long learning! We are building a strong foundation of beliefs, not just academic skills. This is not a sustainable goal without full buy-in from parents. <br><br><em>"Parents are an essential component of the program - a competent and active part of their children's learning experience. They are not considered consumers but co-responsible partners. Their right to participation is expected and supported."</em> <a href="http://learningmaterialswork.com/wp-content/uploads/2016/06/ValuesAndPrinciples.pdf" target="_blank">(source)</a><br><br>We will meet before the year begins and as needed throughout the year. We will also hold optional workshops (free) throughout the year to empower parents to create child-led, curiosity driven environments in their own homes. Additionally, helpful resources will be shared throughout the year. We care deeply about parent empowerment!` },
    { question: `Will my child learn about diversity at Stoneybrook Hollow?`, answer: `Yes! We aim to foster beliefs of advocacy, inclusion and empathy for all. We welcome children from all backgrounds and circumstances. We strive to create a rich learning environment where many cultures, bodies, skin-tones, abilities, families and beliefs are represented. For example, children will learn ASL vocabulary in the studio to communicate with our son who has CHARGE syndrome. <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/desc.12788" target="_blank">Research shows</a> children as young as four years old have already begun to show implicit bias. All learning to combat this will be developmentally appropriate and research-based. We are deeply committed to transparency with this endeavor - please contact us if you have further questions.` },
    { question: `What precautions are in place to keep my child safe?`, answer: `Anna and her husband Davis, who works from home, have been fingerprinted and have background checks. Anna is CPR and first-aid certified. All doors into our home will remain locked during school hours. Children will be signed in and out by authorized adults each day. Please reach out with specific safety concerns, we are happy to support you.` },
  ];

  checkToScroll(index: number): void {
    setTimeout(() => {
      // scroll down for the bottom 2 pages
      if (index >= (this.faqs.length - 2)) {
        this.content.scrollToBottom(200);
      }
    }, 400);
  }
}
