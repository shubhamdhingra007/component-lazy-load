import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  isLoadingLazyComponent = false;
  @ViewChild('lazyQuizContainer', { read: ViewContainerRef }) lazyQuizContainer: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
  ) {

  }

  async loadLazyQuiz() {
    this.isLoadingLazyComponent = true;
    import('./lazy-loaded/quiz-challenge/quiz-challenge.component').then(data => {
      const lazyQuizFactory = this.cfr.resolveComponentFactory(data.QuizChallengeComponent);
      this.lazyQuizContainer.createComponent(lazyQuizFactory, undefined, this.injector);
    });
    this.isLoadingLazyComponent = false;
  }
}
