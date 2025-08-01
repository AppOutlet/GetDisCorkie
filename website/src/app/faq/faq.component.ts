
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  imports: [MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  questions: { question: string, answer: string }[] = [
    {
      question: $localize`What is DisCorkie?`,
      answer:
        $localize`DisCorkie is your all-in-one app for navigating the world of Discourse forums. Whether you're part of one community or dozens, DisCorkie helps you stay organized, engaged, and productive — all from a sleek, unified interface.`,
    },
    {
      question: $localize`What is Discourse?`,
      answer:
        $localize`Discourse is a modern, open-source discussion platform used by communities, companies, and open-source projects around the world. It powers everything from hobbyist groups to product support forums — and DisCorkie is the easiest way to interact with them all.`,
    },
    {
      question: $localize`Which platforms does DisCorkie support?`,
      answer:
        $localize`DisCorkie is available for Android, Windows, and Linux, with macOS and iOS versions on the way. No matter where you are, your communities are just a tap or click away.`,
    },
    {
      question: $localize`Is DisCorkie free to use?`,
      answer:
        $localize`Yes! DisCorkie is free to download and use. Premium features are in the works to unlock even more capabilities for power users.`,
    },
    {
      question: $localize`Can I connect multiple forums?`,
      answer:
        $localize`Absolutely. DisCorkie is designed for people who use multiple Discourse communities. Add as many as you like, and switch between them instantly.`,
    },
    {
      question: $localize`How is my login data handled?`,
      answer:
        $localize`Your privacy is a priority. DisCorkie stores authentication securely on your device and never shares your data.`,
    },
    {
      question: $localize`Is DisCorkie updated frequently?`,
      answer:
        $localize`Yes! DisCorkie is actively developed with new features, improvements, and fixes released regularly. We’re always listening to user feedback to shape the roadmap.`,
    },
    {
      question: $localize`Can I use it with self-hosted forums?`,
      answer:
        $localize`Definitely. As long as your Discourse forum is publicly accessible and running a standard configuration, DisCorkie should work smoothly.`,
    },
  ];
}
