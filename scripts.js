// Initialize Reveal.js with enhanced configuration
Reveal.initialize({
    controls: true,
    progress: true,
    center: true,
    hash: true,
    transition: 'slide',
    // Add more animations
    width: "100%",
    height: "100%",
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    autoPlayMedia: true
});

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Preference Chart
    const preferenceCtx = document.getElementById('preferenceChart').getContext('2d');
    new Chart(preferenceCtx, {
        type: 'doughnut',
        data: {
            labels: ['GPT 선호', '전문가 선호'],
            datasets: [{
                data: [76, 24],
                backgroundColor: [
                    'rgba(74, 144, 226, 0.8)',
                    'rgba(226, 74, 74, 0.8)'
                ],
                borderColor: [
                    'rgba(74, 144, 226, 1)',
                    'rgba(226, 74, 74, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        font: {
                            size: 14
                        },
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: '전문가들의 응답 선호도',
                    color: 'white',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Enhanced Quality Chart
    const qualityCtx = document.getElementById('qualityChart').getContext('2d');
    new Chart(qualityCtx, {
        type: 'bar',
        data: {
            labels: ['GPT 응답', '전문가 응답'],
            datasets: [{
                label: '부실 응답 비율',
                data: [10, 50],
                backgroundColor: [
                    'rgba(74, 144, 226, 0.8)',
                    'rgba(226, 74, 74, 0.8)'
                ],
                borderColor: [
                    'rgba(74, 144, 226, 1)',
                    'rgba(226, 74, 74, 1)'
                ],
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: 'white',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '응답 품질 비교',
                    color: 'white',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '부실 응답 비율: ' + context.raw + '%';
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Add hover effects to steps
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effects to grid items
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add slide change event listener
Reveal.addEventListener('slidechanged', function(event) {
    // Reset and trigger animations for charts if they're in view
    if (event.currentSlide.querySelector('.chart-container')) {
        event.currentSlide.querySelector('.chart-container').style.animation = 'none';
        setTimeout(() => {
            event.currentSlide.querySelector('.chart-container').style.animation = 'scaleIn 0.8s ease-out';
        }, 10);
    }
});
