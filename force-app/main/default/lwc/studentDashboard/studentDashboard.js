import { LightningElement } from 'lwc';

export default class StudentDashboard extends LightningElement {
    totalComplaints = 12;
    pendingComplaints = 5;
    resolvedComplaints = 7;

    handleNewComplaint() {
        alert('Redirecting to complaint form...');
    }
}