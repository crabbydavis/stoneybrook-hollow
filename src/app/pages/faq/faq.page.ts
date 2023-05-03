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
    // { question: `What is your learning philosophy?`, answer: `We are committed to brain science: the most effective way for young children to learn is through child-directed play. Check out what this looks in practive on <a href="https://www.instagram.com/stoneybrookhollow/" target="_blank">Instagram</a> and <a href="https://www.facebook.com/stoneybrookhollowstudio">Facebook</a> pages.`},
    { question: `Where are you located?`, answer: `We are located in East Kaysville, Utah. Our dedicated space seamlessly blends our outdoor and indoor environments.<br><br> Outdoor: We spend half our days (sometimes more!) outside. Children can explore our forested yard, child-grown garden, babbling creek, and winding footpaths. Close supervision is maintained at all times.<br><br> Indoor: Our studio is spacious, clean, warm and flooded with natural light. It is in the above-ground basement of our home in its own dedicated and private space. <br><br> Our address is 930 N. Stoneybrook Rd, Kaysville, Utah.` },
    { question: `How much is tuition?`, answer: `Tuition is $225 a month. A $100 deposit is required upon enrollment to save your spot and will go towards the final month's tuition.<br><br> We believe that all children should have access to a quality early childhood education. We hope to transition to a 501-3c non-profit organization in the near future to provide needs-based scholarships. We aim to serve all demographics as soon as possible..<br><br> If you have a Kindergartener, First Grader and/or a child with a learning disability, funding may be available. Please reach out for more information.` },
    { question: `What ages can attend Stoneybrook Hollow?`, answer: `We enroll children ages 3 - 6 (Preschool, Kindergarten and First Grade). Children must be 3 years old and potty trained by September 1st. We have one, mixed-age classroom.<br><br> Research has found many benefits to a mixed-aged classroom! Older children have the opportunity to explore academic skills at their own pace while also having the freedom to play. They get to nurture and lead younger children and share their skillsets with them. <br><br> Younger children get to learn social and academic skills from older peers. They get to maintain continuity in their education, as they will have the same teacher for 3 years if they begin our program at age 3. <br><br> We love our mixed-age classroom!` },
    { question: `What is the schedule?`, answer: `We meet Mondays - Thursdays from 9:00 AM - 12:00 PM. We will follow the <a href="https://resources.finalsite.net/images/v1670966056/davisk12utus/pukpndt8nxscrvda718y/2023-24SchoolYearCalendar.pdf" target="_blank">Davis County School District calendar</a>  for holidays and breaks. We do not currently offer a 5-day or afternoon option. Families may choose to come less than 4 days, but tuition will remain the same.<br><br> The 2023-2024 school year will begin on September 4th and end on May 23rd.` },
    { question: `What is the teacher-student ratio?`, answer: `We will have 8 children with one guide.` },
    { question: `Is Stoneybrook Hollow a religious school?`, answer: `No. We deeply value diversity of thought and tradition. We welcome learners from all backgrounds and beliefs. We will objectively and respectfully learn about many international religions and cultures throughout the year.` },
    { question: `Can I come tour the studio?`, answer: `Yes! Please ontact me to schedule a time.` },
    { question: `Will snack or lunch be provided?`, answer: `A healthy snack will be available every day. We do not provide lunch. We can accommodate all dietary needs. We are happy and qualified to give tube feeds for our learners with gastronomy tubes.` },
    { question: `Can Stoneybrook Hollow accommodate my child with special needs?`, answer: `We have a child with special needs ourselves! We are passionate about advocating for all children, especially those with unique needs. Please contact us about your specific learner. We would love to provide a tailored learning experience for them within our area of expertise. <br><br> We cannot provide nurses or therapists at this time. If your child has a nurse, we welcome them in our studio.<br><br> If your Kindergartener or First Grader has a learning disability, funding may be available. Please reach out!` },
    { question: `Will my child be graded or tested?`, answer: `We guide learners to skills such as mathematics or literacy when they are developmentally ready and interested. When your child is ready, they will learn to master skills at their own pace. We give very little large-group instruction. <br> Going at one's own pace fosters a love of learning. As such, we do not give grades or tests. We provide a variety of documentation for parents to follow along on their child's learning journey. Children are observed during play to determine mastery of skills.` },
    { question: `How are parents involved?`, answer: `We are in the business of creating life-long learners! We are cultivating a strong foundation of beliefs, not just academic skills. This is not a sustainable goal without full buy-in from parents. <br><br> "Parents are an essential component of the program - a competent and active part of their children's learning experience. They are not considered consumers but co-responsible partners. Their right to participation is expected and supported." <a href="http://learningmaterialswork.com/wp-content/uploads/2016/06/ValuesAndPrinciples.pdf" target="_blank">link</a><br><br> We will meet before the year begins and anytime during the year when needed to ensure that we are supporting the unique needs of your child. We will also hold free workshops throughout the year to empower you to advocate for your child’s growth and development. Additionally, helpful resources will be shared throughout the year. We care deeply about parent empowerment and are so grateful for your support!` },
    { question: `Will my child learn about diversity at Stoneybrook Hollow?`, answer: `Yes! We aim to foster beliefs of advocacy, inclusion and empathy for all. We welcome children from all backgrounds and circumstances. We strive to create a rich learning environment where many cultures, bodies, skin-tones, abilities, families and beliefs are represented. For example, children will learn ASL vocabulary in the studio to communicate with our son who has CHARGE syndrome. <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/desc.12788" target="_blank">Research shows</a> children as young as four years old have already begun to show implicit bias.<br>(https://onlinelibrary.wiley.com/doi/abs/10.1111/desc.12788) All learning to combat this will be developmentally appropriate and research-based. We are deeply committed to transparency with this endeavor - please contact us if you have further questions.` },
    { question: `What precautions are in place to keep my child safe?`, answer: `Anna and her husband Davis (who works in the home) have been fingerprinted and have background checks. Anna maintains an up-to-date CPR and first-aid certification. All doors into our home will remain locked during school hours. Children will be signed in and out by authorized adults each day. Children practice fire, earthquake and intruder drills throughout the year. Due to our small class size we maintain close supervision at all times.<br><br> Please reach out with specific safety concerns, we are happy to support you.` },
    { question: `Are you licensed?`, answer: `We maintain a current <a href="https://drive.google.com/file/d/1YyXZ3zJEJVt8Dqpsx-FMZJQryPeossyG/view?usp=sharing" target="_blank">license</a> through Kaysville City.` },
    { question: `I want to learn more about your learning philosophy!`, answer: `<a href="https://www.instagram.com/stoneybrookhollow/" target="_blank">Follow us</a>` }
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
