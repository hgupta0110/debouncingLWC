import { LightningElement, track } from 'lwc';

export default class DebounceVsNoDebounce extends LightningElement {
    @track inputText = '';

    @track debouncedMetrics = {
        eventsFired: 0,
        timeElapsed: 0,
        cpuUsage: 0,
        networkRequests: 0
    };

    @track noDebounceMetrics = {
        eventsFired: 0,
        timeElapsed: 0,
        cpuUsage: 0,
        networkRequests: 0
    };

    timeoutDebounced;
    
    handleInputChange(event) {
        // Update inputText immediately
        this.inputText = event.target.value;
        
        // Debounced method
        clearTimeout(this.timeoutDebounced);
        this.timeoutDebounced = setTimeout(() => {
            this.calculateDebouncedMetrics();
            this.updateChart();
        }, 300); // Debounce delay of 300 milliseconds

        // Non-debounced method
        this.calculateNoDebounceMetrics();
    }

    calculateDebouncedMetrics() {
        const start = performance.now();
        this.simulateComplexComputation(this.inputText);
        const end = performance.now();
        this.debouncedMetrics.timeElapsed = (end - start).toFixed(2);
        this.debouncedMetrics.cpuUsage = Math.random() * 100; // Example CPU usage
        this.debouncedMetrics.networkRequests++;
        this.debouncedMetrics.eventsFired++;
    }

    calculateNoDebounceMetrics() {
        const start = performance.now();
        this.simulateComplexComputation(this.inputText);
        const end = performance.now();
        this.noDebounceMetrics.timeElapsed = (end - start).toFixed(2);
        this.noDebounceMetrics.cpuUsage = Math.random() * 100; // Example CPU usage
        this.noDebounceMetrics.networkRequests++;
        this.noDebounceMetrics.eventsFired++;
    }

    simulateComplexComputation(inputValue) {
        // Simulate complex computation here (e.g., sorting, processing data)
        // Replace with actual logic as needed
        let arr = [];
        for (let i = 0; i < 1000000; i++) {
            arr.push(Math.random());
        }
        arr.sort();
    }
}