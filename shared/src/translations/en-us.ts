import Translation from '../models/Translation';
import {
    ARTICLE_TITLE_MAX_LENGTH,
    ARTICLE_CONTENT_MIN_LENGTH,
    ARTICLE_CONTENT_MAX_LENGTH,
    THREAD_CONTENT_MAX_LENGTH,
    THREAD_TITLE_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
} from '../constants';

const TRANSLATION: Translation = {
    locale: 'en-US',
    messages: {
        // App information
        app: {
            name: 'Flux',
            footer: 'Copyright © 2020 Claymore, All Rights Reserved.',
            connect_error: 'Failed to fetch',
        },

        // Pages
        page: {
            home: {
                title: 'Home',
                header: "Claymore's Personal Website",
                articles: 'Articles',
                projects: 'Projects',
                music: 'Music',
                recently: 'Recently updated',
            },
            about: {
                title: 'About',
                introduction: 'The Flux App project.',
                learn_more: 'Learn More',
            },
            me: {
                title: 'Me',
                login: 'Sign in',
                forget_password: 'Forget password?',
                sign_up: 'Sign up',
                profile: 'Profile',
                logout: 'Log out',
                preferences: 'Preferences',
                security: 'Change Password',
                change_password: 'Change Password',
                reset_password: 'Forget Password',
                reset_password_step_1: 'Fill Your Account',
                reset_password_step_2: 'Verify Email',
                reset_password_step_3: 'Reset Password',
                notifications: 'Notifications',
            },
            threads: {
                title: 'Forum',
                add: 'Add thread',
                empty: 'No threads are added up to now.',
                placeholder: 'Anything you would like to post...',
                removed: '>>> The original thread has been removed <<<',
                delete: 'Delete Thread: {title}',
                delete_confirmation:
                    'You cannot restore this thread after delete. Are you sure to delete?',
            },
            avatar: {
                title: 'Adjust Your Profile Image',
                rotate: 'Rotate',
                zoom: 'Zoom',
                inquiry: 'Is it okay to use this photo?',
            },

            consent: {
                greeting: 'Hi {email},',
                description: '{app_name} is requesting access to your account.',
                inquiry: 'Do you approve?',
                OTP:
                    'Please fill the code sent to your mailbox, it will expire in 10 minutes.',
                'consent.OTP_not_received': 'Have not received the code?',
                OTP_resend: 'Resend',
            },

            article: {
                title: 'Articles',
                add: 'Add Article',
                edit: 'Edit Article',
                preview: 'Preview',
                delete: 'Delete Article: {title}',
                delete_confirmation:
                    'You cannot restore this article after delete. Are you sure to delete?',
                empty: 'No articles are added up to now.',
                load_more: 'Load More',
                clear_edit: 'Clear Your Editing',
                clear_edit_confirmation:
                    'You cannot restore your editing after clear. Are you sure to clear?',
            },

            insert_image: {
                title: 'Insert Image',
                fill_description: 'Image Description',
                fill_link: 'Image Link',
                upload: 'Upload from Disk',
            },
            notification: {
                event_comment: ' replied your',
                event_like: ' liked your',
                event_unlike: ' cancelled like on your',
                event_mention: ' mentioned you in his/her',
                object_article: ' article ',
                object_comment: ' comment ',
                object_thread: ' thread ',
                empty: 'No new notification.',
                load_all: 'See all read notifications',
                set_as_read: 'Mark as read',
            },
        },
        // Models.
        // pattern: <model_name>.<model_property>.<model_property_values>

        user: {
            email: 'Email',
            password: 'Password',
            confirm_password: 'Confirm Password',
            old_password: 'Old Password',
            new_password: 'New Password',
            name: 'Name',
            photo: 'Photo',
            gender: {
                male: 'Male',
                female: 'Female',
                other: 'Other',
            },
            address: 'Address',
            website: 'Web site',
            OTP: 'OTP (Case-insensitive)',
            invitation_code: 'Invitation Code (Case-sensitive)',
        },
        preferences: {
            editor_type: {
                markdown: 'Markdown',
                title: 'Editor Type',
                wysiwyg: 'WYSIWYG',
            },
        },
        article: {
            content_placeholder: `no less than ${ARTICLE_CONTENT_MIN_LENGTH} characters`,
            content: 'Content',
            title: 'Title',
        },
        post: {
            created_at: 'Created at ',
            no_reply_yet: 'No reply yet',
            replied_at: 'Last replied at ',
            updated_at: 'Last updated at ',
        },

        component: {
            button: {
                approve: 'Approve',
                cancel: 'Cancel',
                clear_edit: 'Clear edit',
                confirm: 'OK',
                create: 'Create',
                delete: 'Delete',
                deny: 'Deny',
                edit: 'Edit',
                file_select: 'Choose File',
                next: 'next',
                preview: 'Preview',
                refresh: 'Refresh',
                refreshing: 'Refreshing',
                scroll_up: 'Scroll to top',
                see_all: 'Read all',
                submit: 'Submit',
                update: 'Update',
            },
            comment: {
                title: 'Comment',
                private: 'Show after login',
                placeholder: 'Leave a reply',
                submit: 'Add Reply',
                reply: 'Reply',
                delete: 'Delete',
                delete_title: 'Delete Comment',
                delete_confirmation:
                    'You cannot restore this comment after delete. Are you sure to delete?',
            },
            footer: {
                nothing_more: 'No more articles',
            },
        },

        // Toasts.
        toast: {
            user: {
                general_error: 'Cannot find the user, please check.',
                invalid_token_error: 'Please log in first.',
                sign_in_successfully: 'Sign in successfully.',
                sign_up_successfully: 'Sign up successfully.',
                sign_in_failed: 'Sign in failed.',
                deny_consent: 'Please approve to finish signing up.',
                update_successfully: 'Update successfully.',
                update_failed: 'Update failed.',
                upload_avatar_failed: 'Upload avatar failed.',
                upload_exist_account:
                    'Account with that email address already exists.',
                account_not_found: 'Account cannot be found.',
                error_OTP: 'Error OTP!',
                expired_OTP: 'Expired OTP!',
                password_not_change:
                    'New password cannot be the same as the old one.',
                old_password_error: 'Old password is incorrect.',
                attack_alert: 'Malicious attack is detected.',
                email: 'Invalid email.',
                email_not_found: 'This email is not found.',
                password_error: 'Password is incorrect.',
                password_too_short: `Password should be longer than or equal to ${PASSWORD_MIN_LENGTH} characters.`,
                password_empty: 'Password could not be empty.',
                confirm_password:
                    'confirmed password field must have the same value as the password field',
                name: 'Name could not be empty.',
                gender: 'Invalid gender.',
                otp_send_failed: 'Send OTP failed!',
                preferences: {
                    editor_type: 'Invalid editor type',
                },
                invitation_code: {
                    empty: 'Invitation code cannot be empty',
                    invalid: 'Invalid invitation code',
                    used: 'Used invitation code',
                },
            },
            client: {
                invalid: 'Invalid client!',
                incorrect_url: 'Incorrect redirectUri!',
            },
            post: {
                title_empty: 'Title could not be empty.',
                content_empty: 'Content could not be empty.',
                insert_image_failed: 'Failed to insert the image',
            },
            thread: {
                title_too_long: `Title could not be longer than ${THREAD_TITLE_MAX_LENGTH} characters.`,
                content_too_long: `Thread could not be longer than ${THREAD_CONTENT_MAX_LENGTH} characters.`,
                add_successfully: 'Your thread created.',
                add_failed: 'Your thread cannot be created.',
                delete_successfully: 'Your thread has been deleted',
                delete_failed: 'Your thread cannot be deleted.',
            },
            article: {
                title_too_long: `Title could not be longer than ${ARTICLE_TITLE_MAX_LENGTH} characters.`,
                content_too_short: `Article could not be shorter than ${ARTICLE_CONTENT_MIN_LENGTH} characters.`,
                content_too_long: `Article could not be longer than ${ARTICLE_CONTENT_MAX_LENGTH} characters.`,
                save_successfully: 'Save your article successfully.',
                delete_successfully: 'Delete your article successfully.',
                invalid_author: 'You are not the author!',
                not_found: 'Article not found!',
            },
            notification: {
                not_found: 'Cannot find this notification',
            },
            comment: {
                content_empty: 'Comment could not be empty.',
                add_successfully: 'Comment successfully.',
                add_failed: 'Comment failed.',
                delete_parent:
                    'Sorry, you cannot delete a comment someone has replied to it.',
                delete_successfully: 'Delete successfully.',
                delete_failed: 'Delete failed.',
                not_found: 'Cannot find this comment.',
            },
        },
    },
};

export default TRANSLATION;
