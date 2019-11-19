import { Course } from './course';

fdescribe('Course', () => {
  it('should create an instance', () => {
    expect(new Course('leo course','','','')).toBeTruthy();
  });
});
