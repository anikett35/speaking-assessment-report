// Assessment Data
const assessmentData = {
    overall: 7.5,
    skills: {
        pronunciation: 7.5,
        fluency: 7.0,
        vocabulary: 8.0,
        grammar: 7.2
    },
    progress: {
        pronunciation: 83,
        fluency: 78,
        vocabulary: 89,
        grammar: 80
    }
};

// Class Average Data
const classAverage = {
    pronunciation: 6.5,
    fluency: 6.2,
    vocabulary: 6.8,
    grammar: 6.4
};

// Performance Trend Data
const trendData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    scores: [6.2, 6.5, 6.8, 7.0, 7.1, 7.3, 7.2, 7.4, 7.3, 7.5],
    classAvg: [5.8, 5.9, 6.1, 6.2, 6.3, 6.4, 6.3, 6.5, 6.4, 6.5]
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeEventListeners();
    initializeAnimations();
});

// Initialize Charts
function initializeCharts() {
    createScoreChart();
    createRadarChart();
    createTrendChart();
}

// Create Overall Score Chart
function createScoreChart() {
    const ctx = document.getElementById('scoreChart').getContext('2d');
    const percentage = (assessmentData.overall / 9) * 100;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: [
                    getSkillColor('overall'),
                    '#e9ecef'
                ],
                borderWidth: 0,
                borderRadius: 10,
                borderAlign: 'inner'
            }]
        },
        options: {
            cutout: '70%',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create Radar Chart
function createRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Pronunciation', 'Fluency', 'Vocabulary', 'Grammar', 'Coherence', 'Task Response'],
            datasets: [
                {
                    label: 'Your Score',
                    data: [
                        assessmentData.skills.pronunciation,
                        assessmentData.skills.fluency,
                        assessmentData.skills.vocabulary,
                        assessmentData.skills.grammar,
                        7.5, // Coherence
                        7.8  // Task Response
                    ],
                    backgroundColor: 'rgba(67, 97, 238, 0.2)',
                    borderColor: getSkillColor('pronunciation'),
                    borderWidth: 2,
                    pointBackgroundColor: getSkillColor('pronunciation'),
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Class Average',
                    data: [
                        classAverage.pronunciation,
                        classAverage.fluency,
                        classAverage.vocabulary,
                        classAverage.grammar,
                        6.5, // Coherence
                        6.7  // Task Response
                    ],
                    backgroundColor: 'rgba(108, 117, 125, 0.1)',
                    borderColor: '#adb5bd',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    pointBackgroundColor: '#adb5bd',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 9,
                    min: 0,
                    ticks: {
                        stepSize: 3,
                        backdropColor: 'transparent',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        color: '#495057'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(33, 37, 41, 0.95)',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: {
                        size: 13,
                        weight: '600',
                        family: "'Poppins', sans-serif"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Poppins', sans-serif"
                    },
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.r.toFixed(1)}/9`;
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create Trend Chart
function createTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trendData.months,
            datasets: [
                {
                    label: 'Your Progress',
                    data: trendData.scores,
                    borderColor: getSkillColor('pronunciation'),
                    backgroundColor: 'rgba(67, 97, 238, 0.05)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: getSkillColor('pronunciation'),
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Class Average',
                    data: trendData.classAvg,
                    borderColor: '#adb5bd',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.4,
                    pointBackgroundColor: '#adb5bd',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 5,
                    max: 8,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toFixed(1);
                        },
                        font: {
                            size: 11
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        font: {
                            size: 11
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif"
                        }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(33, 37, 41, 0.95)',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: {
                        size: 13,
                        weight: '600',
                        family: "'Poppins', sans-serif"
                    },
                    bodyFont: {
                        size: 12,
                        family: "'Poppins', sans-serif"
                    },
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}/9`;
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Get Skill Color
function getSkillColor(skill) {
    const colors = {
        overall: '#4361ee',
        pronunciation: '#4361ee',
        fluency: '#4cc9f0',
        vocabulary: '#f8961e',
        grammar: '#7209b7'
    };
    return colors[skill] || '#4361ee';
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Download Button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', handleDownload);
    }
    
    // View Rubric Button
    const rubricBtn = document.querySelector('.btn-view-rubric');
    if (rubricBtn) {
        rubricBtn.addEventListener('click', handleViewRubric);
    }
    
    // Skill Cards Hover Effects
    const skillCards = document.querySelectorAll('.skill-detail-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        });
    });
}

// Handle Download
function handleDownload() {
    const button = this;
    const originalHTML = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Report...';
    button.disabled = true;
    button.classList.add('pulse');
    
    // Simulate download process
    setTimeout(() => {
        // Reset button
        button.innerHTML = originalHTML;
        button.disabled = false;
        button.classList.remove('pulse');
        
        // Show success message
        showNotification('Report downloaded successfully!', 'success');
        
        // Log download event
        console.log('Report downloaded:', {
            timestamp: new Date().toISOString(),
            userId: '883391',
            reportType: 'Speaking Assessment',
            score: assessmentData.overall
        });
    }, 2000);
}

// Handle View Rubric
function handleViewRubric(e) {
    e.preventDefault();
    
    // Show loading state
    showNotification('Opening rubric...', 'info');
    
    // In a real application, this would open a modal or navigate to rubric page
    setTimeout(() => {
        window.open('#', '_blank');
    }, 500);
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 350px;
    `;
    
    // Add close button listener
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    document.body.appendChild(notification);
}

// Get Notification Icon
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Get Notification Color
function getNotificationColor(type) {
    const colors = {
        success: '#43aa8b',
        error: '#f72585',
        warning: '#f8961e',
        info: '#4361ee'
    };
    return colors[type] || '#4361ee';
}

// Initialize Animations
function initializeAnimations() {
    // Animate progress bars
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
    
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card, .skill-detail-card, .recommendation-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add floating animation to recommendation cards
    const recCards = document.querySelectorAll('.recommendation-card');
    recCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
    });
}

// Utility function to update scores dynamically
function updateScores(newScores) {
    if (newScores && typeof newScores === 'object') {
        Object.assign(assessmentData.skills, newScores);
        
        // Recalculate overall score
        const sum = Object.values(assessmentData.skills).reduce((a, b) => a + b, 0);
        assessmentData.overall = sum / Object.values(assessmentData.skills).length;
        
        // Update progress percentages
        assessmentData.progress = {
            pronunciation: Math.round((assessmentData.skills.pronunciation / 9) * 100),
            fluency: Math.round((assessmentData.skills.fluency / 9) * 100),
            vocabulary: Math.round((assessmentData.skills.vocabulary / 9) * 100),
            grammar: Math.round((assessmentData.skills.grammar / 9) * 100)
        };
        
        // Update UI
        updateUI();
        initializeCharts();
        showNotification('Scores updated successfully!', 'success');
    }
}

// Update UI elements
function updateUI() {
    // Update overall score
    const overallScore = document.querySelector('.score');
    if (overallScore) {
        overallScore.textContent = assessmentData.overall.toFixed(1);
    }
    
    // Update skill scores
    for (const skill in assessmentData.skills) {
        const scoreElement = document.querySelector(`.skill-score .score[data-skill="${skill}"]`);
        if (scoreElement) {
            scoreElement.textContent = assessmentData.skills[skill].toFixed(1);
        }
        
        // Update progress bars
        const progressBar = document.querySelector(`.progress-bar.${skill}`);
        if (progressBar) {
            progressBar.style.width = `${assessmentData.progress[skill]}%`;
        }
        
        // Update progress labels
        const progressLabel = document.querySelector(`.progress-label span:last-child[data-skill="${skill}"]`);
        if (progressLabel) {
            progressLabel.textContent = `${assessmentData.progress[skill]}%`;
        }
    }
}

// Expose update function for demo purposes
window.updateAssessmentScores = updateScores;

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        assessmentData,
        classAverage,
        trendData,
        updateScores,
        getSkillColor
    };
}