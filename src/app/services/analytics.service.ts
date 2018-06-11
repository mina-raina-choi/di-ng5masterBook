import { Injectable } from '@angular/core';
import {
    Metric,
    AnalyticsImplementation
} from '../analytics-demo/analytics-demo.interface';

@Injectable()
export class AnalyticsService {
   constructor(private implementation: AnalyticsImplementation) {

   }

   record(metric: Metric): void {
    //  인터페이스를 주입받아서 메소드를 구현?????
    // recordEvent 구현부는 정의되지않았는데??
       this.implementation.recordEvent(metric)
   }
}